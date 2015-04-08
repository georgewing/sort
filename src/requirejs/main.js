/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-07 23:53:27
 * @version $Id$
 */
requirejs.config({
	baseUrl: '/demos/sort/src/' ,
    waitSeconds: 200,
    paths: {
        // zepto: 'lib/zepto',
        // jHash: 'lib/jhash',
        // handlebars: 'lib/handlebars',
        // underscore: 'lib/underscore',
        // Deferred: 'lib/deferred',
        // DataCenter: 'model/datacenter',
        // iscroll: 'lib/iscroll',
        // fastclick: 'lib/fastclick',
        // wxstat: 'util/wxstat'
    },
    'shim': {
        // iscroll: {
        //     exports: 'IScroll'
        // },
        // zepto: {
        //     exports: '$'
        // },
        // jHash: {
        //     exports: 'jHash'
        // },
        // handlebars: {
        //     exports: 'Handlebars'
        // },
        // underscore: {
        //     exports: '_'
        // },
        // Deferred: {
        //     deps: ['underscore'],
        //     exports: 'Deferred'
        // }
    }
})(['requirejs/quicksortAmd'],function( quicksort ){

		var arr=[34, 1, 23, 4, 67, 107, 36, 90, 502, 204, 109];
		arr = quicksort(arr);

		console.log(arr);
});