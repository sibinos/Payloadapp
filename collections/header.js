const Header={
    slug:'header',
    admin: {
        useAsTitle: 'header',
    },
    admin: {
        useAsTitle: 'email',
    },
    
    access:{
        read:()=>true,
    },
    fields:[{
        name:'URL1',
        type:'text'
    },{
        name:'URL2',
        type:'text'
    },{
        name:'URL3',
        type:'text'
    },
    {
        name:'head',
        type:'text'
    },
    {
        name:'logo' ,
        type:'upload',
        relationTo:'media'
     }
    ]
}
export default Header;