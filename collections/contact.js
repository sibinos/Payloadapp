const ContactPage={
    slug:'contactPage',
    admin: {
        useAsTitle: 'addd contact',
      },
    access:{
        read:()=>true
    },
    fields:[
        {name:'head',
        type:'text'
    },
        {
        name:'content',
        type:'textarea'
    },
    {
        name:'icon' ,
        type:'upload',
        relationTo:'media'
    },
    {
        name: 'owner', 
        type: 'relationship', 
        relationTo: ['header','footer'],
        hasMany: true,
        
    }
        
    ]
}
export default ContactPage;
