const createHttpError = require('http-errors');
const _ = require('lodash')
const { Services: service } = require('./service');
const { signAccessToken, signRefreshToken } = require('../../helpers/jwt_helper')
const { verifyRefreshToken } = require('../../helpers/verify_token')
var multer = require('multer');
const mimetype = require('mime-types')
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var XLSX = require('xlsx');
const fs = require('fs');


class Controller {
	async createCategories(req, res, next) {
		try {
			const data = await service.createCategories(req.body)
			if (!_.isEmpty(data)) {
				res.status(200).send({ message: "Categorie Successfully Inserted", status: "200" })
			} else {
				res.status(201).send({ message: "Categorie Already Exits", status: "201" })
			}
		} catch (error) {
			res.status(500).send({ message: "Failed", status: "500" })
		}
	}

	async getCategories(req, res, next) {
		try {
			const data = await service.getCategories()
			const count = data.length
			if ((!_.isEmpty(data)) && (count > 0)) {
				res.status(200).send({ data: data, count: count, message: "Successfully Fetch all Datas", status: "200" })
			} else {
				res.status(201).send({ message: "Failed to fetch Datas", status: "201" })
			}
		} catch (error) {
			res.status(500).send({ message: "error accure while Fetching", status: "500" })
		}
	}

	async getCategoriesById(req, res, next) {
		try {
			const { id } = req.params;
			const data = await service.getCategoriesById(id)
			if (!_.isEmpty(data)) {
				res.status(200).send({ data: data, message: "Successfully Fetch Data for the Given ID", status: "200" })
			} else {
				res.status(201).send({ message: "No User Found to Fetch", status: "201" })
			}
		} catch (error) {
			next(error)
			res.status(500).send({ message: "error accure while Fetching", status: "500" })
		}
	}

	// Update an account.....

	async updateCategoriesById(req, res, next) {
		try {
			const { id } = req.params
			const datas = req.body
			const result = await service.updateCategoriesById({ _id: id }, datas)
			if (!_.isEmpty(result)) {
				res.status(200).send({ message: "Data Updated successfully", status: "200" })
			} else {
				res.status(201).send({ message: "Failed to Update Data", status: "201" })
			}
		} catch (error) {
			next(error)
			res.status(500).send({ message: "error accure while Updating", status: "500" })
		}
	}


	async deleteCategoriesById(req, res, next) {
		try {
			const { id } = req.params
			const result = await service.deleteCategoriesById({ _id: id })
			if (!_.isEmpty(result)) {
				res.status(200).send({ message: "Data Deleted successfully", status: "200" })
			} else {
				res.status(500).send({ message: "Failed to Delete", status: "201" })
			}
		} catch (error) {
			next(error)
			res.status(500).send({ message: "error accure while Deleting", status: "500" })
		}
	}


	// Brand Collections
	async createBrandCollections(req, res, next) {
		try {
			console.log("show====>")
			const data = await service.createsBrandCollections(req.body)
			if (!_.isEmpty(data)) {
				res.status(200).send({ message: data.message, status: data.code })
			} else {
				res.status(201).send({  message: data.message, status: data.code })
			}
		} catch (error) {
			res.status(500).send({ message: "Failed", status: "500" })
		}
	}


	async getBrands(req, res, next) {
		try {
			const data = await service.getBrands()
			const count = data.length
			if ((!_.isEmpty(data)) && (count > 0)) {
				res.status(200).send({ data: data, count: count, message: "Successfully Fetch all Datas", status: "200" })
			} else {
				res.status(201).send({ message: "Failed to fetch Datas", status: "201" })
			}
		} catch (error) {
			res.status(500).send({ message: "error accure while Fetching", status: "500" })
		}
	}


	// product Collections
	async createproductCollections(req, res, next) {
		console.log("show====>")
		try {
			const data = await service.createproductCollections(req.body)
			if (!_.isEmpty(data)) {
				res.status(200).send({ message: data.message, status: data.code })
			} else {
				res.status(201).send({  message: data.message, status: data.code })
			}
		} catch (error) {
			res.status(500).send({ message: "Failed", status: "500" })
		}
	}

}
module.exports = Controller