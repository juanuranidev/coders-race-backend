import { Router } from "express";
import { CodeRoutes } from "./code/routes";
import { LanguageRoutes } from "./language/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/language", LanguageRoutes.routes);
    router.use("/api/code", CodeRoutes.routes);

    return router;
  }
}