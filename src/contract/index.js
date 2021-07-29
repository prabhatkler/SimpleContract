/* jshint esversion: 8 */
import contract from 'truffle-contract'
import simpleArtifact from '../../build/contracts/storagecontract'

const StorageContract = contract(simpleArtifact)

export{
    StorageContract
}