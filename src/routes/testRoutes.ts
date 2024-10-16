import { Router, Request, Response } from "express";
const router: Router = Router();

// 예: 모든 사용자 가져오기
router.get("/ping", (req:Request, res:Response) => {
    console.log(req.body)
    res.status(200).json({ message: "ping" });
});
export default router
