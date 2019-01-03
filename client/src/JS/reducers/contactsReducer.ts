const initialState = [
  { firstName: 'Abc', lastName: 'xyz', email: 'Abc.xyz@gmail.com' },
  { firstName: 'Abc', lastName: 'xyz', email: 'Abc.xyz@gmail.com' }
]

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
