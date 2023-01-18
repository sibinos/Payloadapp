const ServicePage={
    slug:'servicePage',
    access:{read:()=>true},
    
    admin: {
        useAsTitle: 'service',
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
export default ServicePage;