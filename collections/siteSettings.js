const SiteSettings={
    slug:'settings',
    access:{
        read:()=>true
    },
    admin: {
        useAsTitle: 'settings',
      },
    fields:[
        {
            name:'id',
            type:'text'
        },
        {
            name:'heading',
            type:'text'
        },
        {
            name:'logo',
            type:'upload',
            relationTo:'media'
        }
    ]
    
}
export default SiteSettings;