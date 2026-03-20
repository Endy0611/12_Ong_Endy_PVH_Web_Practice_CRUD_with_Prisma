
export async function GET(_,{params}){
    const res = await prisma.stuentTable.findUnique();
    return NextResponse.
}