import { NearestFilter, TextureLoader, RepeatWrapping } from "three";
import { dirt, glass, grass, log, wood } from "./index";

const dirtTex = new TextureLoader().load(dirt);
const glassTex = new TextureLoader().load(glass);
const grassTex = new TextureLoader().load(grass);
const logTex = new TextureLoader().load(log);
const woodTex = new TextureLoader().load(wood);

grassTex.magFilter = NearestFilter;
grassTex.wrapS = RepeatWrapping;
grassTex.wrapT = RepeatWrapping;
grassTex.repeat.set(100, 100);

dirtTex.magFilter = NearestFilter;
glassTex.magFilter = NearestFilter;
grassTex.magFilter = NearestFilter;
logTex.magFilter = NearestFilter;
woodTex.magFilter = NearestFilter;

export { dirtTex, glassTex, grassTex, logTex, woodTex };
