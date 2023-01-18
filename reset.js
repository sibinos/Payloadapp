import payload from 'payload';
import path from 'path';
import fs from 'fs';
import { User } from '../payload-types';
import { MongoClient } from 'mongodb';
import { generateContactFormSubmission, generateMailingListSubmission } from '../data/forms/submissionGenerator';
import { contactFormData } from '../data/forms/contactFormData';
import { mailingListFormData } from '../data/forms/mailingListFormData';

export async function seed() {
  try {
    payload.logger.info(`Seeding database...`);

    const mediaDir = path.resolve(__dirname, '../../media');
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, '../../media'), { recursive: true });
    }

    await seedData();
    payload.logger.info(`Seed Complete.`);
  } catch (error) {
    console.error(error);
    payload.logger.error('Error seeding database.');
  }
}

export async function reset() {
  try {
    payload.logger.info(`Resetting database...`);

    const mediaDir = path.resolve(__dirname, '../../media');
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, '../../media'), { recursive: true });
    }

    await dropDB();
    await seedData();
    payload.logger.info(`Reset Complete.`);
  } catch (error) {
    console.error(error);
    payload.logger.error('Error resetting database.');
  }
}

async function dropDB() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db(new URL(process.env.MONGO_URL).pathname.substring(1));
  await db.dropDatabase();
}

async function seedData() {
  const { id: demoUserId } = await payload.create<User>({
    collection: 'users',
    data: {
      name: 'Demo User',
      email: 'demo@payloadcms.com',
      password: 'demo',
    },
  });

  // Page - Home
  const homeString = homeData(imageId, demoUserId);
  const homeStringDE = homeDataDE(imageId, demoUserId);
  const homeStringES = homeDataES(imageId, demoUserId);

  // Page - Video Series
  // Page - Case Studies
  // Main Menu
  // Forms - Contact
  const contactForm = await payload.create<any>({
    collection: 'forms',
    data: contactFormData(),
  });
  // Forms - Mailing List
  const mailingListForm = await payload.create<any>({
    collection: 'forms',
    data: mailingListFormData(),
  });

  // Generate form submissions
  const contactFormSubmissions = [...Array(5)].map(_ => {
    return payload.create<any>({
      collection: 'form-submissions',
      data: generateContactFormSubmission(contactForm.id),
    });
  });
  await Promise.all(contactFormSubmissions);

  const mailingListSubmissions = [...Array(5)].map(_ => {
    return payload.create<any>({
      collection: 'form-submissions',
      data: generateMailingListSubmission(mailingListForm.id),
    });
  });
  await Promise.all(mailingListSubmissions);

  // Create Categories
  const [newsCategory, featureCategory, tutorialCategory] = await Promise.all([
    payload.create<any>({
      collection: 'categories',
      data: {
        name: 'news',
      },
    }),
    payload.create<any>({
      collection: 'categories',
      data: {
        name: 'feature',
      },
    }),
    payload.create<any>({
      collection: 'categories',
      data: {
        name: 'tutorial',
      },
    }),
  ]);

  const ignorePromise = await payload.create<any>({
    collection: 'categories',
    data: {
      name: 'announcements',
      archived: true,
    },
  });

  await payload.create<any>({
    collection: 'posts',
    data: generateTsInterfacesData(demoUserId, featureCategory.id, imageId),
  });
  await payload.create<any>({
    collection: 'posts',
    data: whiteLabelAdminUIData(demoUserId, tutorialCategory.id, imageId),
  });
  await payload.create<any>({
    collection: 'posts',
    data: buildWebsiteData(demoUserId, tutorialCategory.id, imageId),
  });
  await payload.create<any>({
    collection: 'posts',
    data: introducingPayloadData(demoUserId, newsCategory.id, imageId),
  });
  await payload.create<any>({
    collection: 'posts',
    data: futurePostData(demoUserId, newsCategory.id, imageId),
  });
}