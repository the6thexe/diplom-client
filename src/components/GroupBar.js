import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Dropdown, ListGroup } from 'react-bootstrap'
import { Context } from '../index'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { fetchGroups } from '../http/padAPI'


const GroupBar = observer(() => {
    const { student } = useContext(Context)
    useEffect(() => {
        fetchGroups().then(data => student.setGroups(data))
    }, [])
    return (
        <ListGroup>
            <Dropdown>
                <DropdownToggle variant={"outline-dark"}>
                    {student.selectedGroup.groupId || 'Группа'}
                </DropdownToggle>
                <DropdownMenu>
                    {student.groups.map(group =>
                        <DropdownItem
                            active={group.id === student.setSelectedGroup.id}
                            onClick={() => student.setSelectedGroup(group)}
                            key={group.id}>
                            {group.groupId}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </ListGroup>
    );
})

export default GroupBar