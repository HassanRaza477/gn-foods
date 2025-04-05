// schemas/order.js
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer Details',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'address', type: 'text', title: 'Delivery Address' }
      ]
    },
    {
      name: 'items',
      title: 'Order Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'product', 
              type: 'reference', 
              to: [{ type: 'menuItem' }],
              title: 'Product' 
            },
            {
              name: 'quantity',
              type: 'number',
              title: 'Quantity',
              initialValue: 1,
              validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1)
            }
          ]
        }
      ]
    },
    {
      name: 'total',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(0)
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Completed', value: 'completed' },
          { title: 'Failed', value: 'failed' }
        ]
      },
      initialValue: 'pending'
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'processing'
    },
    {
      name: 'createdAt',
      title: 'Order Date',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    }
  ]
}