import { describe, it, beforeEach } from 'node:test'
import TodoService from '../src/todoService.js'
import assert from 'node:assert'

describe('todoService test Suite', () => {
    describe('#list', () => {
        let _todoService
        let _dependencies
        const mockDatabase = [
            {
                text: 'I MUST MEET CHAVES DA SILVA',
                when: new Date('2021-01-21T00:00:00.000Z'),
                status: 'late',
                id: '30d4a2ee-d500-4eda-9a6c-2fce5c41a53b'
            }
        ]
        beforeEach((context) => {
            _dependencies = {
                todoRepository: {
                    list: context.mock.fn(async () => mockDatabase)
                }
            }
            _todoService = new TodoService(_dependencies)
        })
        it('should return a list of items with uppercase text', async ()=>{
            const expected = mockDatabase.map(({ text, ...result }) => ({ text: text.toUpperCase(), ...result }))
            
            const result = await _todoService.list()
            assert.deepStrictEqual(result, expected)
            
            const fnMock = _dependencies.todoRepository.list.mock
            assert.deepStrictEqual(fnMock.callCount(), 1)
        })
    })
    describe('#create', () => {
        let _todoService
        let _dependencies

    })
})