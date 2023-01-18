const PrivacyPolicyPage={
    slug:'privacyPage',
    admin: {
        useAsTitle: 'privacyPolicy',
      },
    access:{read:()=>true},
    fields:[{
        name:'Header',
        type:"text",
        },
        {
        name:'Content',
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
export default PrivacyPolicyPage;