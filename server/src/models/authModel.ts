import pools from '../db'

const { caffeine } = pools
export const getUserByUsername = async function (username: string) {
    const userApp = await caffeine.query(
        'SELECT * FROM adm.user_login_data u WHERE u.username=$1',
        [username]
    )
    return userApp.rows
}

export const getUserById = async function (userId: number) {
    const query = `
        select 
            p.*, 
            m.codigo_ibge, 
            c.forma_rendimento_id,
            fp.parcelas as qtde_max_dependentes,
            fp.taxa_remocao_dependente,
            c.plano_id
        from ponto.tb_paciente p 
        left join ponto.tb_municipio m on p.municipio_id = m.municipio_id 
        left join ponto.tb_paciente_contrato c on p.paciente_id = c.paciente_id and c.ativo=true
        left join ponto.tb_forma_pagamento fp on c.plano_id = fp.forma_pagamento_id
        where 
            regexp_replace(cpf, $$[^0-9]$$, '', 'g') = '${userId}' 
            and p.ativo = true 
        order by p.data_cadastro, c.data_cadastro desc limit 1
    `
    const client = await caffeine.query(query)
    return client.rows
}
