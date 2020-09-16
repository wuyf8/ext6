Ext.onReady(function () {
  var store=Ext.create('Ext.data.TreeStore',{
      fields: [{
          name: 'text'
      }],
      proxy:{
          type:'ajax',
          url:'http://localhost:8080/test',
          reader:'json'
      },
      root:{
          text:'总公司',
          name:'总公司',
          expanded:false,
          children:[{
              text: 'Dashboard',
              leaf: true
          }]
      }
  });

  var tree=Ext.create('Ext.panel.Panel',{
      renderTo:Ext.getBody(),
      layout:'border',
      frame:true,
      title:'1110',
     height:1024,
      items:[{
                region:'north',
                text:'111',
          items:[{
                    xtype:'form',
              collapsible: true,  //可折叠
              autoScroll: true,
              items: [
                  { xtype: "textfield", name: "name", fieldLabel: "姓名", allowBlank: false },
                  { xtype: "numberfield", name: "age", fieldLabel: "年龄", decimalPrecision: 0, vtype: "age" }
              ]
          }]
      },{
          region:'center',
          text:'222',
          items:[
              {
                  xtype:'gridpanel',
                  bbar:[{
                      text:'按钮'
                  }]
              }
          ]
      }]

  })

})