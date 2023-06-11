import {makeAutoObservable} from "mobx"

export default class StudentStore {
    constructor() {
        this._groups = [
           /* {id: 1, groupId: "2119",},
            {id: 2, groupId: "2120",},
            {id: 3, groupId: "2121",},
            {id: 4, groupId: "2122",},
            {id: 5, groupId: "2123",},*/

        ]
        this._disciplines = [
            /*{id: 1, name: "Программное обеспечение информационных технологий",},
            {id: 2, name: "Бухгалтерский учет и контроль",},
            {id: 3, name: "Документоведение и организация хозяйства",},
            {id: 4, name: "Организация гостиничных услуг",},*/
        ]
        this._specs = [
            /*{id: 1, name: "Программное обеспечение информационных технологий",},
            {id: 2, name: "Бухгалтерский учет и контроль",},
            {id: 3, name: "Документоведение и организация хозяйства",},
            {id: 4, name: "Организация гостиничных услуг",},*/
        ]
        this._students = [
            /*{id: 1, name: "Плешаков Юрий Дмитриевчи", phone: "+375297606162", groupId: 1},
            {id: 2, name: "Патиевич Стас Григорьевич", phone:"+375296546542", groupId: 2},
            {id: 3, name: "Станчик Елизавета Череп", phone:"+375333333333", groupId: 3},
            {id: 4, name: "Чурила Никита Денисович", phone:"+375296589741", groupId: 2},
            {id: 5, name: "Шапавала Алексей Юрьевич", phone:"+375447317128", groupId: 2},
            {id: 6, name: "Таргонский Александр Дмитриевич", phone: "+375295036009", groupId: 1},
            {id: 7, name: "Хватик Максим Александрович", phone: "+375335036009", groupId: 1},
            {id: 8, name: "Плеяндр Павел", phone:"+375333335333", groupId: 3},
            {id: 9, name: "Крестов Алексей Ибрагимов", phone:"+375296893741", groupId: 2},
            {id: 10, name: "Додушка Михаил Потапов", phone:"+375447317348", groupId: 2},
            {id: 11, name: "ТОРГОНСКИЙ Александр дмитриевич", phone: "+375295643009", groupId: 1},
            {id: 12, name: "Хватика Максима Александровича", phone: "+375337906009", groupId: 1},*/
        ]
        this._teachers = [
            /*{id: 1, name: "Кирей Иван", login: "1kireyI"},
            {id: 2, name: "Захарич Василий", login: "2zaharichV"},
            {id: 3, name: "Соколовский Юрий", login: "3sokolovskiyY"},
            {id: 4, name: "Радецкая Юлия", login: "4radezkayaY"},*/
            ]
        this._ms = []
        this._selectedGroup = {}
        this._selectedDiscipline = {}
        this._selectedSpec = {}
        this._selectedDate = {}
        this._selectedMark = {}
        this._selectedInfo = {}
        this._selectedId = {}
        makeAutoObservable(this)
    }


    setGroups(groups) {
        this._groups = groups
    }
    get groups() {
        return this._groups
    }
    
    setSelectedGroup(group) {
        this._selectedGroup = group
    }
    get selectedGroup() {
        return this._selectedGroup
    }
    
    
    setSpecs(specs) {
        this._specs = specs
    }
    get specs() {
        return this._specs
    }
    
    setSelectedSpec(spec) {
        this._selectedSpec = spec
    }
    get selectedSpec() {
        return this._selectedSpec
    }
    

    setStudents(students) {
        this._students = students
    }
    get students() {
        return this._students
    }


    setDisciplines(disciplines) {
        this._disciplines = disciplines
    }
    get disciplines() {
        return this._disciplines
    }

    setSelectedDiscipline(discipline) {
        this._selectedDiscipline = discipline
    }
    get selectedDiscipline () {
        return this._selectedDiscipline
    }

    setTeachers(teachers) {
        this._teachers = teachers
    }
    get teachers() {
        return this._teachers
    }

    setMs(ms) {
        this._ms = ms
    }
    get ms() {
        return this._ms
    }

    setSelectedDate(date) {
        this._selectedDate = date
    }

    get selectedDate() {
        return this._selectedDate
    }

    setSelectedMark(mark) {
        this._selectedMark = mark
    }

    get selectedMark() {
        return this._selectedMark
    }

    setSelectedInfo(info) {
        this._selectedInfo = info
    }

    get selectedInfo() {
        return this._selectedInfo
    }

    setSelectedId(id) {
        this._selectedId = id
    }

    get selectedId() {
        return this._selectedId
    }
}