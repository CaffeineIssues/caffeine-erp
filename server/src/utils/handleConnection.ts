export const handleConnect = (socket: any) => {
    socket.on('connect', () => {
        console.log('Conectado')
    })
}
