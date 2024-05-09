import {validate as uuidValidate} from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
    prop1: string
    prop2: number
}

class StubEntity extends Entity<StubProps>{}


describe('Entity Unit Test', () =>{
    it('should set props and id', () => {
        const props = { prop1: 'value1', prop2: 1 }
        const entity = new StubEntity(props)
        expect(entity.props).toStrictEqual(props)
        expect(entity._id).not.toBeNull()
    })

    it('Id should be a valid uuid', () => {
        const entity = new StubEntity({prop1: 'value1', prop2: 1})
        expect(uuidValidate(entity._id)).toBeTruthy()
    })
    it('Should accept a valid uuid', () => {
        const props = {prop1: 'value1', prop2: 1}
        const id = 'cf1f3872-5135-4354-8cd7-1aacbd751503'
        const entity = new StubEntity(props, id)
        expect(uuidValidate(entity._id)).toBeTruthy()
        expect(entity._id).toBe(id)
    })
    it('Should convert a entity to a Javascript Object', () => {
        const props = {prop1: 'value1', prop2: 1}
        const id = 'cf1f3872-5135-4354-8cd7-1aacbd751503'
        const entity = new StubEntity(props, id)
        expect(entity.toJSON()).toStrictEqual({id, ...props})
    })
})