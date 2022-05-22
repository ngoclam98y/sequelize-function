# các chức năng

- pdf
- excel
- one to one
- one to many : user -> product

- many to many

```code
- 1 user có 1 order
- trong 1 order thì có nhiều sản phẩm
```

```code
// 1:1
Organization.belongsTo(User, { foreignKey: 'owner_id' });
User.hasOne(Organization, { foreignKey: 'owner_id' });

// 1:M
Project.hasMany(Task, { foreignKey: 'tasks_pk' });
Task.belongsTo(Project, { foreignKey: 'tasks_pk' });

// N:M
User.belongsToMany(Role, { through: 'user_has_roles', foreignKey: 'user_role_user_id' });
Role.belongsToMany(User, { through: 'user_has_roles', foreignKey: 'roles_identifier' });

```

## Self Join

```code
One to Many

this.hasMany(models.Message, {
    foreignKey: "replyId",
    allowNull: true,
    as: "messages",
});

this.belongsTo(models.Message, {
    foreignKey: "replyId",
    as: "replyMessage",
    allowNull: true,
});

Query:
 const users = await User.findOne({
      include: [
        {
          // where: { replyId: null },
          model: Message,
          as: "messages",
          attributes: { exclude: ["userId"] },
          include: [
            {
              model: Message,
              as: "messages",
              attributes: { exclude: ["userId"] },
            },
          ],
        },
      ],
      attributes: { exclude: ["password"] },
    });
return users;

```

```code
Many to Many
this.belongsToMany(models.Message, {
    foreignKey: "messageId",
    allowNull: true,
    as: "messages",
    through: "MessageReply",
});

this.belongsToMany(models.Message, {
    foreignKey: "replyId",
    as: "replyMessage",
    allowNull: true,
    through: "MessageReply",
});
Query:
 const users = await User.findOne({
      include: [
        {
          // where: { replyId: null },
          model: Message,
          as: "messages",
          attributes: { exclude: ["userId"] },
          include: [
            {
              model: Message,
              as: "messages",
              attributes: { exclude: ["userId"] },
            },
          ],
        },
      ],
      attributes: { exclude: ["password"] },
    });
return users;
```
