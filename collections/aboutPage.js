const AboutPage={
    slug:'aboutPage',
    access:{read:()=>true},
    admin: {
        useAsTitle: 'Add aboutpage',
      },
    fields:[{
        name:'aboutHeader',
        type:"text",
        },
        {
        name:'aboutContent',
        type:"textarea",
        },
        {
            name: 'owner', 
            type: 'relationship', 
            relationTo: ['header','footer'],
            hasMany: true,
        }
        
        
        
]
    
}
export default AboutPage;