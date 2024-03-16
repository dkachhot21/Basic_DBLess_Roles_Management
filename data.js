const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
};

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'deepak', role: ROLE.ADMIN },
        { id: 2, name: 'John Doe', role: ROLE.BASIC },
        { id: 3, name: 'Jhon lee', role: ROLE.BASIC }
    ],
    projects: [
        { id: 1, name: "Deepak's Project", userId: 1 },
        { id: 2, name: "Doe's Project", userId: 2 },
        { id: 3, name: "Lee's Project ", userId: 3 }
    ]
}