const hre = require('hardhat')

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.001'),
  })

  await waveContract.deployed()

  console.log('Contract address: ', waveContract.address)

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address,
  )
  console.log(
    'Contract Balance: ',
    hre.ethers.utils.formatEther(contractBalance),
  )
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
