// src/models/game.js

/**
 * Game model
 * @typedef {Object} Game
 * @property {string} homeTeam - Home team name
 * @property {string} awayTeam - Away team name
 * @property {string|Date} gameTime - Game time (ISO string or Date)
 * @property {number} spread - Point spread
 * @property {number} total - Total points
 */

export default class Game {
  /**
   * @param {Object} params
   * @param {string} params.homeTeam
   * @param {string} params.awayTeam
   * @param {string|Date} params.gameTime
   * @param {number} params.spread
   * @param {number} params.total
   */
  constructor({ homeTeam, awayTeam, gameTime, spread, total }) {
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.gameTime = gameTime
    this.spread = spread
    this.total = total
  }

  /**
   * Human-friendly display name for the game.
   * Example: "Lakers @ Warriors"
   * @returns {string}
   */
  get displayName() {
    return `${this.homeTeam} @ ${this.awayTeam}`
  }
}
