const express = require('express');
const catRouter = express.Router();
const slugify = require('slugify');
const categoryData = require('../model/categoryData');

catRouter.post('/category/create',(req,res)=>{

    const categoryObj = {
        title: req.body.title,
        slug:slugify(req.body.title)
    }
    if(req.body.parentId){
        categoryObj.parentId=req.body.parentId;
    }
    const cat = new categoryData(categoryObj);
    cat.save((error, category)=>{

    });
});

module.exports = router;