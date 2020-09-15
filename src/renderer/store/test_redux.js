import { configureStore, createSlice } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './test_redux.css'

console.log(styles)
console.log(1111111111111111111111111111111111111111111111111111111111111111)

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 1,
	},
	reducers: {
		increment: (state) => {
			state.value++
		},
		decrement: (state) => {
			state.value--
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

export default configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
})

const { increment, decrement, incrementByAmount } = counterSlice.actions

const selectCount = (state) => state.counter.value

export function Counter() {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()

	const [incrementAmount, setIncrementAmount] = useState(0)

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
				<span className={styles.value}>{count}</span>
				<button
					className={styles.button}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount) || 0))
					}
				>
					Add Amount
				</button>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
				>
					Add Async
				</button>
			</div>
		</div>
	)
}
