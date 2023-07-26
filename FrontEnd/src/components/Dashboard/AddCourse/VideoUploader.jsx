import React from 'react'
import { ReactDOM } from 'react'
const BOOKS = [
    { bookId: 1, title: '1984', hyphenizedTitle: '1984' },
    { bookId: 81, title: 'Catch-22', hyphenizedTitle: 'Catch-22' },
    { bookId: 17, title: 'Alice in Wonderland', hyphenizedTitle: 'Alice-in-Wonderland' }
]

const createStore = (reducer) => {
    let state = {
        books: [],
        uploads: {},
        uploadCounter: 0,
        selectedBook: ''
    }
    let listeners = []

    /**
     * Returns the current state of the Redux Store
     * 
     * @return {Object} state
     */
    const getState = () => state

    /**
     * The dispatcher does two things:
     *     1. Calculates a new state given a specific action
     *     2. Notify listeners of the state change
     *     
     * @param  {Object} action
     */
    const dispatch = (action) => {
        // Update the state
        state = reducer(state, action)

        // Notify each listener by calling/invoking them
        listeners.forEach(listener => listener())
    }

    /**
     * TODO: idk what to write
     * 
     * @param  {Function}  listener  TODO: idk what to write
     * @return {Function}            An 'unsubscribe' method
     */
    const subscribe = (listener) => {
        listeners.push(listener)

        // Instead of a dedicated 'unsubscribe' function, simply return
        // a method that, if invoked, will unsubscribe a listener
        return () => listeners = listeners.filter(l => l !== listener)
    }

    return { getState, dispatch, subscribe }
}

const reducer = (state, action) => {
    console.log(state, action)
    let uploads = Object.assign({}, state.uploads)

    switch (action.type) {
        case 'updateBooks':
            return Object.assign(state, { books: action.payload })

        case 'updateSelectedBook':
            return Object.assign(state, { selectedBook: action.payload })

        case 'addVideo':
            let uploadCounter = state.uploadCounter + 1
            uploads = Object.assign({}, state.uploads)
            uploads[uploadCounter] = {
                title: '',
                description: '',
                video: null
            }

            return Object.assign(state, {
                uploadCounter: uploadCounter,
                uploads: uploads
            })

        case 'deleteVideo':
            uploads = Object.assign({}, state.uploads)
            delete uploads[action.payload]
            return Object.assign(state, { uploads: uploads })

        case 'updateVideoUpload':
            let newState = Object.assign({}, state)
            newState.uploads[action.index][action.attribute] = action.payload
            return newState

        default:
            return state
    }
}

class FormBuilder extends React.PureComponent {
    render() {
        return <div>
            {
                this.props.formSchema.map((formRow, index) => {
                    let className = formRow.className || 'form-control'
                    return <div className="form-group" key={index}>
                        <label>
                            {formRow.label}
                        </label>
                        <br />
                        <input
                            className={className}
                            type={formRow.type}
                            placeholder={formRow.placeholder}
                            value={formRow.value}
                            onChange={e => this.props.store.dispatch({
                                type: 'updateVideoUpload',
                                attribute: formRow.label,
                                payload: (e.target.value),
                                index: this.props.index
                            })} />
                    </div>
                })
            }
            <button onClick={this.props.deleteVideo}
                className="btn btn-danger">
                Delete Video
            </button>
        </div>
    }
}

class UploadContainer extends React.Component {
    render() {
        let store = this.props.store
        let formSchema = [
            { type: 'text', label: 'title' },
            { type: 'text', label: 'description' },
            { type: 'file', label: 'video', className: "form-control-file" }
        ]

        let uploads = []
        for (let index in this.props.uploads) {
            if (!this.props.uploads.hasOwnProperty(index)) {
                continue
            }

            let upload = this.props.uploads[index]

            formSchema.map(data => {
                switch (data.label) {
                    case 'title':
                        data.value = upload.title
                        break

                    case 'description':
                        data.value = upload.description
                        break
                }

                return data
            })


            uploads.push(<div key={index}>
                <h3>Video {index}</h3>
                <FormBuilder
                    formSchema={formSchema}
                    deleteVideo={() => store.dispatch({
                        type: 'deleteVideo',
                        payload: index
                    })
                    }
                    index={index}
                    store={store} />
            </div>)
        }

        return <div>
            <div>
                <label>
                    Book Title
                </label>
                <br />
                <select className="form-control"
                    value={this.props.selectedBook}
                    onChange={(e) => store.dispatch({
                        type: 'updateSelectedBook',
                        payload: e.target.value
                    })}>
                    {this.props.books.map(book => {
                        return <option value={book.bookId} key={book.title}>
                            {book.title}
                        </option>
                    })}
                </select>
            </div>
            <div>{uploads}</div>
            <br />
            <div>
                <button
                    className="btn btn-success"
                    onClick={() => store.dispatch({ type: 'addVideo' })}>
                    Add Video +
                </button>
            </div>
        </div>
    }
}

class App extends React.Component {
    render() {
        let state = this.props.store.getState()

        return <UploadContainer
            books={state.books}
            uploads={state.uploads}
            selectedBook={state.selectedBook}
            dispatch={this.props.store.dispatch}
            store={this.props.store} />
    }
}
let store = createStore(reducer)
store.dispatch({
    type: 'updateBooks',
    payload: BOOKS
})

class VideoUploader extends React.Component {

    render() {
        return (
            // {store.subscribe(render) }
            < div >
                <h1>Video uploader</h1>
                <div>
                    <App store={store}/>
                    
                </div>
            </ >
        )
        // store.subscribe(render)
    }


    // const render = () => ReactDOM.render(
    //     <App store={store} />,
    //     document.getElementById('container')
    // )

    // store.subscribe(render)

    // render()

}

// const VideoUploader = () => {
//     let store = createStore(reducer)
//     store.dispatch({
//         type: 'updateBooks',
//         payload: BOOKS
//     })

//     return<div>
//         <h1>Video Uploader</h1>
//         <div>
//             <App store={store}/>
//         </div>
//     </div>

//     // const render = () => ReactDOM.render(
//     //     <App store={store} />,
//     //     document.getElementById('container')
//     // )

//     // store.subscribe(render)

//     // render()

// }

export default VideoUploader


