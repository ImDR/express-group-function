var express = require('express');

express.application.group = express.Router.group = function(...args){
    var router = express.Router();
    
    if(args.length === 1){
        args[0](router);
        this.use('/', router);
    }else if(args.length === 3){
        args[2](router);
        this.use(args[0], args[1], router);
    }else if(args.length === 2 && typeof args[0] === 'string'){
        args[1](router);
        this.use(args[0], router);
    }else if(args.length === 2){
        args[1](router);
        this.use('/', args[0], router);
    }

    return this;
};