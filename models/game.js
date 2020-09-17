module.exports = function(sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        genre: {
            type: DataTypes.ENUM,
            values: ['Action', 'Adventure', 'Fighting', 'Platformer', 'Racing', 'RPG','Shooter', 'Sports', 'Strategy', 'Survival/Horror']
        },
        publisher: {
            type: DataTypes.STRING,
            
        },
        systemPreference:{
            type: DataTypes.ENUM,
            values: ['Android', 'iOS', 'MacOS', 'PC', 'Nintendo Switch', 'Nintendo Wii', 'Nintendo WiiU', 'Playstation 3','Playstation 4', 'Xbox ONE', 'XBOX 360' ]
        },

        // rating: {
        //     type: DataTypes.ENUM,
        //     values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
           
        // },
        rating: {
          type: DataTypes.INTEGER({
            isBetween: (1,10),
          })
        },

        wishlist: {
            type: DataTypes.BOOLEAN,
            default: true
        },

        playing: {
            type: DataTypes.BOOLEAN,
            default: false
        },

        beaten: {
            type: DataTypes.BOOLEAN,
            default: false
        }

    })

    Game.associate  = function(models){
      Game.belongsTo(models.User, {
        foreignKey: {
          // allowNull: false
        }
      })
    }
    return Game;
    }
