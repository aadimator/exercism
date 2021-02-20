"""
    count_nucleotides(strand)

The frequency of each nucleotide within `strand` as a dictionary.

Invalid strands raise a `DomainError`.

"""
function count_nucleotides(strand)
    d = Dict('A' => 0, 'C' => 0, 'G' => 0, 'T' => 0)
    for c in strand
        try d[c] += 1 catch; throw(DomainError("Invalid strand")) end
    end
    return d
end
