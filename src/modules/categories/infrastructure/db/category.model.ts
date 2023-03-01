import { DataTypes, Model } from 'sequelize'

import sequelize from '../../../shared/infrastructure/db/sequelize.db'

interface CategoryAttributes {
  id: string
  name: string
  description: string

  status: boolean
}

class CategoryModel extends Model<CategoryAttributes> implements CategoryAttributes {
  public id: string
  public name: string

  public description: string

  public status: boolean

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

CategoryModel.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
          msg: 'el nombre no debe tener más de 50 caracteres',
        },
      },
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true,
      validate: {
        len: {
          args: [0, 256],
          msg: 'La descripción no debe tener más de 256 caracteres',
        },
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'categories',
    timestamps: false,
  },
)

export { CategoryModel }
