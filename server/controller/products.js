const productSchema = require("../Model/Products")

const createProduct = async(req,res)=>{
    try {4
        const productData = req.body;
        const product = await productSchema.create(productData);
        if(product){
            console.log(product)
            res.status(200).json(product);
        }else{
            res.status(400).json({message:"error while creating product"});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const getProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const productData = await productSchema.findById(id);
        if(productData){
            res.status(200).json(productData);
        }else{
            res.status(404).json({message:"product not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const getProducts = async(req,res)=>{
    try {
        const productsData = await productSchema.find();
        if(productsData){
            res.status(200).json(productsData);
        }else{
            res.status(404).json({message:"products not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const productData = await productSchema.updateOne({"_id":id},data);
        if(productData.acknowledged){
            const updatedProductData = await productSchema.findById(id);
            res.status(200).json(updatedProductData);
        }else{
            res.status(404).json({message:"products not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const productData = await productSchema.deleteOne({"_id":id});
        if(productData.deletedCount){
            res.status(200).json({message:`product deleted`,id,...productData});
        }else{
            res.status(404).json({message:"products not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}