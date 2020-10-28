module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define("Character",{
        highScore: DataTypes.INTEGER,
    });
    Character.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Character.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }        
        });
    };
    return Character;
};