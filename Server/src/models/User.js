const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true
      },
      email:{
         type: DataTypes.STRING,
         unique: true,
         allowNull:false,
         isEmail: true
      },
      password:{
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len: [[6,10]],
            is: /.*\d.*/,
         }
      }
   }, { timestamps: false });
};
