import { pool } from '../config/database.js'

const getUpperMoons = async (req, res) => {
    try {
        const { search } = req.query

        let results

        if (search) {
            const query = `
                SELECT * FROM uppermoons
                WHERE name        ILIKE $1
                   OR ability_type ILIKE $1
                   OR arc          ILIKE $1
                   OR threat_level ILIKE $1
                   OR description  ILIKE $1
                ORDER BY upper_rank ASC
            `
            results = await pool.query(query, [`%${search}%`])
        } else {
            results = await pool.query('SELECT * FROM uppermoons ORDER BY upper_rank ASC')
        }

        res.status(200).json(results.rows.map(formatMoon))
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getUpperMoonBySlug = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM uppermoons WHERE slug = $1',
            [req.params.slug]
        )

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Upper Moon not found' })
        }

        res.status(200).json(formatMoon(results.rows[0]))
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const formatMoon = (row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    upperRank: row.upper_rank,
    abilityType: row.ability_type,
    arc: row.arc,
    threatLevel: row.threat_level,
    image: row.image,
    description: row.description,
})

export default { getUpperMoons, getUpperMoonBySlug }
