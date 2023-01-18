const Footer={
    slug:'footer',
    admin: {
        useAsTitle: 'footer',
      },
    access:{
        read:()=>true
    },
    fields:
        [
            {
                name:'footerHead',
                type:'text'
            },
            {
                name:'id',
                type:'text'
            },
            {
                name:'subHead',
                type:'text'
            },
            {
                name:'FooterContent',
                type:'textarea'
            },
            {
                name:'icon1',
                type:'text'
                
            },
            {
                name:'icon2',
                type:'text'
                
            },
            {
                name:'icon3',
                type:'text'
                
            },
            {
                name:'icon4' ,
                type:'upload',
                relationTo:'media'
             }
        ]
    
}
export default Footer;