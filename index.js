// code your solution here
function superbowlWin ( arrayName )
{
    const displayFindings = arrayName.find( arrayName => arrayName.result === 'W' )
    return !!displayFindings ? displayFindings.year : undefined
}