import express from 'express'
import { Request, Response } from 'express'
import pools from '../db'
const { caffeine } = pools
const router = express.Router()

router
    .route('/fields-new-user/:perms')
    .get(async (req: Request, res: Response) => {
        try {
            let fieldsData = {}
            const companyStr = `select * from adm.company`
            const departmentStr = `select * from adm.department`
            const roleStr = `select * from adm.department_role`
            const permissionStr = `select * from adm.permission`
            const getQuery = await caffeine
                .query(companyStr)
                .then(async function (results) {
                    fieldsData = {
                        ...fieldsData,
                        company: results.rows,
                    }
                })
                .then(async function (results) {
                    const getQuery = await caffeine
                        .query(roleStr)
                        .then(async function (results) {
                            fieldsData = {
                                ...fieldsData,
                                role: results.rows,
                            }
                        })
                        .then(async function () {
                            const getQuery = await caffeine
                                .query(departmentStr)
                                .then(async function (results) {
                                    fieldsData = {
                                        ...fieldsData,
                                        department: results.rows,
                                    }
                                })
                                .then(async function () {
                                    const getQuery = await caffeine
                                        .query(permissionStr)
                                        .then(async function (results) {
                                            fieldsData = {
                                                ...fieldsData,
                                                permissions: results.rows,
                                            }
                                            console.log(fieldsData)
                                            return fieldsData
                                        })
                                })
                        })
                })
        } catch (err) {
            console.log(err)
        }
    })

export default router
