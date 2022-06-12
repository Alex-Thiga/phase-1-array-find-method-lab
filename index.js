// code your solution here
function superbowlWin ( arrayName )
{
    const result = arrayName.find( arrayName => arrayName.result === 'W' )
    return !!result ? result.year : undefined
}