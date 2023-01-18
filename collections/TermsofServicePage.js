const TermsOfServicePage={
    slug:'termsofServicePage',
    access:{read:()=>true},
    admin: {
        useAsTitle: 'Terms of Service',
      },
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
export default TermsOfServicePage;