const HomePage={
    slug: 'home',
    admin: {
      useAsTitle: 'Add homepage',
    },
    // admin:{isSortable:true,hasMany:true},
    access:{
        read:()=>true
    },
    fields: [
      {
        name: 'home', 
        type: 'relationship', 
        relationTo: ['header','main','footer'],
        hasMany: true,
        
      }
    ]

}
export default HomePage;