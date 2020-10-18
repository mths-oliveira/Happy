function saveOrphanage(db, orphanage) {
    return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        images,
        instruction,
        opening_hours,
        opening_on_weekends
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.images}",
        "${orphanage.instruction}",
        "${orphanage.opening_hours}",
        "${orphanage.opening_on_weekends}"
    );
`)
}

module.exports = saveOrphanage;