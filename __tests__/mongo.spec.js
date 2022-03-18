const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('users')
    });
    afterAll(async() => {
        await connection.close()
    })

    it('should insert a new user into the users collection', async () => {
        const users = db.collection('users');

        const mockUser = {
            id: 'some-user-id',
            firstName: "Emily",
            lastName: "Button",
            email: "emilyButton@gmail.com",
            age: 25,
        }

        await users.insertOne(mockUser)

        const insertedUser = await users.findOne({ id: 'some-user-id' });

        expect(insertedUser).toEqual(mockUser)
    },
        
    it('should delete a user from the users collection', async () => {
        const users = db.collection('users')
        await users.deleteMany({ id: 'some-user-id' })
        const deletedUser = await users.findOne({ id: 'some-user-id' });
        expect(deletedUser).toEqual(null)
    })
)})