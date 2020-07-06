const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    permissionsName: state => state.user.permissionsName,
    permissions: state => state.user.permissions,
    name: state => state.user.name,
    routes: state => state.user.routes,
    tel: state => state.user.tel
};
export default getters;
