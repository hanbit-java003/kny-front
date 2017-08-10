module.exports = [{
    leftCategory: [{
        id: 'about',
        title: 'JUICE&CO.'
    }, {
        id: 'product-list',
        title: 'PROGRAM',
    }, {
        id: 'product-list',
        title: 'CLEANSE',
    }]
},{
    rightCategory: [{
        id: 'delivery',
        title: 'DELIVERY'
    },{
        id: 'board',
        title: 'SERVICE',
        subId:'notice',
        subMenus: [{
            subId: 'notice',
            subTitle: 'NOTICE',
        },{
            subId: 'faq',
            subTitle: 'FAQ',
        },{
            subId: 'q&a',
            subTitle: 'Q&A',
        },{
            subId: 'review',
            subTitle: 'REVIEW',
        }]
    },{
        id: 'board-event',
        title: 'EVENT'
    }]

}];