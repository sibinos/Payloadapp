const Users = {
  slug: 'users',
  auth: true,
  
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name:'First Name',
      type:'text'
    },{
      name:'Last Name',
      type:'text'
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        {label:'Editor',value:'editor'}
      ],
      required: true,
      defaultValue: 'user', 
    },
  ],
};

export default Users;