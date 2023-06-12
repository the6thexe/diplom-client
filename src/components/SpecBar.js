import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Form, Card, Dropdown } from 'react-bootstrap';
import { Context } from '../index';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { fetchSpecs } from '../http/padAPI';

const SpecBar = observer(() => {
    const { student } = useContext(Context)
    useEffect(() => {
        fetchSpecs().then(data => student.setSpecs(data))
    }, [])
    return (
        <Form className="d-flex">
            <Dropdown>
                <DropdownToggle variant={"outline-dark"}>
                    {student.selectedSpec.name || 'Специальность'}
                </DropdownToggle>
                <DropdownMenu>
                    {student.specs.map(spec =>
                        <DropdownItem
                        active={spec.id === student.setSelectedSpec.id}
                        onClick={() => student.setSelectedSpec(spec)}
                        key={spec.id}>
                            {spec.name}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </Form>
    );
});

export default SpecBar