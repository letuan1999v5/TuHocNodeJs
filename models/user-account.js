

module.exports = (sequelize, Sequelize) => {
    const Accounts = sequelize.define("accounts", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        gender: {
            type: Sequelize.TINYINT,
            allowNull: false,
        },
        dateOfBirth: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    })
}