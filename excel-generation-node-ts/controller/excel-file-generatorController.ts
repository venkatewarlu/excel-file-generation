import { Router } from 'express';
import ExcelFileGeneratorService from '../service/excel-file-generationService';
const router = Router()


router.get("/generate-excel-file", async (req, res) => {
    await ExcelFileGeneratorService.generateExcelFile(req, res)
    // res.json({ users: users })
})



export default router