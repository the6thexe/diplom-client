import { $authHost, $host } from "./index";

export const createSpec = async (spec) => {
    const { data } = await $authHost.post('api/spec', spec)
    return data
}

export const fetchSpecs = async () => {
    const { data } = await $host.get('api/spec')
    return data
}

export const fetchOneSpec = async (id) => {
    const { data } = await $host.get('api/spec/' + id)
    return data
}

export const deleteOneSpec = async (id) => {
    $authHost.delete('api/spec/' + id).catch((error) => {
        return console.log("Данные не удалены: ", error)
    })
}

export const createDiscipline = async (discepline) => {
    const { data } = await $authHost.post('api/discipline', discepline)
    return data
}

export const fetchDisciplines = async () => {
    const { data } = await $host.get('api/discipline')
    return data
}

export const fetchOneDiscipline = async (id) => {
    const { data } = await $host.get('api/discipline/' + id)
    return data
}

export const deleteOneDiscipline = async (id) => {
    $authHost.delete('api/discipline/' + id).catch((error) => {
        return console.log("Данные не удалены: ", error)
    })
}

export const createStudent = async (student) => {
    const { data } = await $authHost.post('api/student', student)
    return data
}

export const fetchStudents = async () => {
    const { data } = await $host.get('api/student')
    return data
}

export const fetchOneStudent = async (id) => {
    const { data } = await $host.get('api/student/' + id)
    return data
}

export const deleteOneStudent = async (id) => {
    $authHost.delete('api/student/' + id).catch((error) => {
        return console.log("Данные не удалены: ", error)
    })
}

export const createGroup = async (group) => {
    const { data } = await $authHost.post('api/group', group)
    return data
}

export const fetchGroups = async () => {
    const { data } = await $host.get('api/group')
    return data
}

export const fetchOneGroup = async (id) => {
    const { data } = await $host.get('api/group/' + id)
    return data
}

export const deleteOneGroup = async (id) => {
    $authHost.delete('api/group/' + id).catch((error) => {
        return  console.log("Данные не удалены: ", error)
    })
}

export const createTeacher = async (teacher) => {
    const { data } = await $authHost.post('api/teacher', teacher)
    return data
}

export const fetchTeachers = async () => {
    const { data } = await $host.get('api/teacher')
    return data
}

export const fetchOneTeacher = async (id) => {
    const { data } = await $host.get('api/teacher/' + id)
    return data
}

export const deleteOneTeacher = async (id) => {
    $authHost.delete('api/teacher/' + id).catch((error) => {
        return console.log("Данные не удалены: ", error)
    })
}

export const createM = async (m) => {
    const { data } = await $authHost.post('api/mark', m)
    return data
}

export const fetchMs = async () => {
    const { data } = await $host.get('api/mark')
    return data
}

export const fetchOneM = async (id) => {
    const { data } = await $host.get('api/mark/' + id)
    return data
}

export const deleteOneM = async (id) => {
    $authHost.delete('api/mark/' + id).catch((error) => {
        return console.log("Данные не удалены: ", error)
    })
}