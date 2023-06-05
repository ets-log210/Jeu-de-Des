import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('test', 'routes', 'jeuRouter-redemarrerJeu.test.ts');
  content = readFileSync(filename, 'utf-8');
});

describe('redemarrerJeu.test.ts', () => {
  it("should contain \"get('/api/v1/jeu/redemarrerJeu')\"", () => {
    expect(content.includes("get('/api/v1/jeu/redemarrerJeu')")).toBeTruthy();
  });

  it("devrait contenir un test pour jouer qui retourne 404 (après redemarrerJeu()", () => {
    expect(content.includes("/api/v1/jeu/jouer/")).toBeTruthy();
    expect(content.includes(".status).toBe(404)")).toBeTruthy();
  });
});
